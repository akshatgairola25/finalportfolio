# Upload System Setup Guide

## Folder Structure Created

```
public/
├── uploads/
│   ├── intro/           # Place intro videos here
│   ├── assignments/     # Place assignment files here
│   ├── coverLetter/     # Place your cover letter here
│   ├── presentation/    # Place your presentation here
│   └── README.md        # Instructions
└── uploads-metadata.json # Configuration file
```

## How to Use

### Step 1: Add Your Files

1. **For Introduction Video:**
   - Place your video file in: `public/uploads/intro/`
   - Supported formats: MP4, WebM, Ogg, etc.
   - Example: `public/uploads/intro/intro.mp4`

2. **For Assignment:**
   - Place your file in: `public/uploads/assignments/`
   - Supported formats: PDF, DOC, DOCX, etc.
   - Example: `public/uploads/assignments/assignment.pdf`

3. **For Cover Letter:**
   - Place your file in: `public/uploads/coverLetter/`
   - Supported formats: PDF, DOC, DOCX, etc.
   - Example: `public/uploads/coverLetter/cover-letter.pdf`

4. **For Presentation:**
   - Place your file in: `public/uploads/presentation/`
   - Supported formats: PDF, PPTX, etc.
   - Example: `public/uploads/presentation/presentation.pdf`

### Step 2: Enable Files in Metadata

Edit `public/uploads-metadata.json`:

```json
{
  "introVideo": {
    "enabled": true,                    // Change to true
    "filePath": "/uploads/intro/intro.mp4",
    "fileName": "intro.mp4",
    "title": "Introduction Video"
  },
  "assignment": {
    "enabled": true,                    // Change to true
    "filePath": "/uploads/assignments/assignment.pdf",
    "fileName": "assignment.pdf",
    "title": "My Assignment"
  }
}
```

### Step 3: Supported Formats

**Videos:**
- MP4 (.mp4)
- WebM (.webm)
- Ogg (.ogv)
- MOV (.mov)

**Assignments:**
- PDF (.pdf)
- Word Documents (.doc, .docx)
- Text Files (.txt)
- Excel (.xls, .xlsx)
- Images (.jpg, .png, .gif)

**Cover Letter:**
- PDF (.pdf)
- Word Documents (.doc, .docx)

**Presentation:**
- PDF (.pdf)
- PowerPoint (.pptx, .ppt)

### Features

✅ **Cover Letter Download** - Visitors can download your professional cover letter
✅ **Presentation Download** - Share your presentation with site visitors
✅ **Upload from Browser** - Use the upload buttons to select files
✅ **Static Files** - Pre-configure files in the public folder
✅ **Dual Support** - Supports both upload methods simultaneously
✅ **Download** - Users can download all documents
✅ **Video Player** - Built-in video player with controls
✅ **Responsive** - Works on desktop and mobile
✅ **Automatic Loading** - Files load automatically on page load

### Upload Button Status / "Upload Cover Letter" / "Upload Presentation"
- **After upload/configuration:** "Video Uploaded ✓" / "Assignment Uploaded ✓" / etc.
- **Before upload/configuration:** "Upload Intro Video" / "Upload Assignment"
- **After upload/configuration:** "Video Uploaded ✓" / "Assignment Uploaded ✓"

### Example Workflow

1. Copy `intro.mp4` to `public/uploads/intro/`
2. Copy `assignment.pdf` to `public/uploads/assignments/`
3. Copy `cover-letter.pdf` to `public/uploads/coverLetter/`
4. Copy `presentation.pdf` to `public/uploads/presentation/`
5. Update `public/uploads-metadata.json` with `"enabled": true` for each file
6. Files automatically appear on your portfolio
7. Visitors can view video and download all documents

### Tips

- Keep file sizes reasonable (videos < 100MB recommended)
- Use compression tools if files are too large
- File names should not contain special characters
- Test the metadata JSON for valid syntax
- Use descriptive file names for better UX
