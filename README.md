# About

This project aims to reporduce error with react-doc-viewer npm module.

This also reproduces the error:
```
Failed to load module script: The server responded with a non-JavaScript MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec.

url: http://localhost:8081/_snowpack/pkg/-/pdfjs-dist@v2.4.456-WBzJ8pEGmpogsCfpmUqJ/dist=es2020,mode=raw/build/pdf.worker.entry
``` 
when source is set to skypack.
```
//snowpack.config.js
  packageOptions: {
        /* ... */
        source:'remote',
        types:true
  },
```
To see the error please uncoment line with source in snowpack.config.js 
