"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeView() {
  return (
    <div className="flex h-screen w-screen flex-col font-sans bg-slate-950 text-slate-100 p-3 sm:p-5 overflow-hidden">
      {/* Top Bar Header */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-2 px-2 shrink-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/assets/UjjwalKumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white rounded-full text-xs font-semibold"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open in New Tab
            </Button>
          </a>
          <a
            href="/assets/UjjwalKumar_Resume.pdf"
            download="UjjwalKumar_Resume.pdf"
          >
            <Button
              size="sm"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-xs font-semibold"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </Button>
          </a>
        </div>
      </div>

      {/* Full-Height PDF Viewport Frame */}
      <div className="w-full max-w-7xl mx-auto flex-1 mt-2 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
        <object
          data="/assets/UjjwalKumar_Resume.pdf#toolbar=1&navpanes=0"
          type="application/pdf"
          className="w-full h-full min-h-full"
        >
          <iframe
            src="/assets/UjjwalKumar_Resume.pdf#toolbar=1"
            className="w-full h-full border-none"
            title="Ujjwal Kumar Resume"
          >
            <p className="p-8 text-center text-slate-400">
              Your browser does not support inline PDFs.{" "}
              <a
                href="/assets/UjjwalKumar_Resume.pdf"
                className="text-primary underline"
              >
                Click here to download the PDF.
              </a>
            </p>
          </iframe>
        </object>
      </div>
    </div>
  );
}
