import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resumeFile from '../pdf/dean_wright_resume.pdf';

export default function Resume() {

    return (
        <div className="resume-container"> 
            <Document file={resumeFile}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}