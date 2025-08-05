import { Router } from 'express';
import multer from 'multer';
import { parse } from 'csv-parse/sync';
import { database } from '../../database/Database.js';
import { isValidAsset, normalizeAndParseAssets } from './helpers.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('assetFile'), (req, res) => {
  const companyId = req.body.companyId;
  const file = req.file;

  if (!companyId || !file) {
    return res.status(400).json({ error: 'companyId and assetFile are required' });
  }

  try {
    let rawAssets: any[];

    if (file.mimetype === 'application/json') {
      rawAssets = JSON.parse(file.buffer.toString());
    } else if (file.mimetype === 'text/csv') {
      rawAssets = parse(file.buffer.toString(), {
        columns: true,
        skip_empty_lines: true,
      });
    } else {
      return res.status(400).json({ error: 'Unsupported file format. Use JSON or CSV.' });
    }

    const parsedAssets = normalizeAndParseAssets(rawAssets);

    for (const asset of parsedAssets) {
      if (!isValidAsset(asset)) {
        return res.status(400).json({
          error:
            'Each asset must have address, latitude, and longitude (case and space-insensitive).',
        });
      }
      const validAssets = parsedAssets.filter(isValidAsset);

      database.addAssets(companyId, validAssets);
    }

    res.status(200).json({ message: `Uploaded ${parsedAssets.length} assets.` });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to parse or process file.' });
  }
});

router.get('/', (req, res) => {
  const companyId = req.query.companyId as string | undefined;

  const assets = database.getAssets(companyId);
  res.status(200).json(assets);
});

export default router;
