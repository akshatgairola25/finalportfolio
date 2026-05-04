# Quick Start - Upload Files

## 2-Minute Setup

### Option 1: Use Upload Buttons (Easiest for Testing)
1. Click "Upload Intro Video" button
2. Select a video from your computer
3. Click "Upload Assignment" button
4. Select an assignment file
5. Done! Files appear immediately

### Option 2: Use Static Files (For Production)
1. Add video to: `public/uploads/intro/intro.mp4`
2. Add assignment to: `public/uploads/assignments/assignment.pdf`
3. Edit `public/uploads-metadata.json`:
   ```json
   {
     "introVideo": {
       "enabled": true,
       "filePath": "/uploads/intro/intro.mp4",
       "fileName": "intro.mp4"
     },
     "assignment": {
       "enabled": true,
       "filePath": "/uploads/assignments/assignment.pdf",
       "fileName": "assignment.pdf"
     }
   }
   ```
4. Save and refresh browser
5. Done! Files appear from the public folder

## File Organization

```
PersonalPortfolio-main/
├── public/
│   ├── uploads/
│   │   ├── intro/
│   │   │   └── intro.mp4
│   │   └── assignments/
│   │       └── assignment.pdf
│   └── uploads-metadata.json
└── ...
```

## Troubleshooting

**Files not appearing?**
- Check metadata.json has `"enabled": true`
- Verify file paths are correct
- Ensure files exist in the folders
- Check browser console for errors

**Video won't play?**
- Verify video format and codec
- Try with common formats (MP4)
- Check file is not corrupted

**Can't download assignment?**
- Ensure file has correct extension
- Check file isn't too large
- Try with different format
