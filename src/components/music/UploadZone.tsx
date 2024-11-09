import React, { useCallback } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import type { UploadZoneProps } from '../../types';

export default function UploadZone({ onFileSelect, isUploading }: UploadZoneProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files?.length) {
      onFileSelect(files);
    }
  }, [onFileSelect]);

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-dashed border-purple-500/50 rounded-xl p-8 text-center hover:border-purple-400 transition-colors cursor-pointer"
    >
      <input
        type="file"
        id="music-upload"
        className="hidden"
        accept="audio/*"
        multiple
        onChange={(e) => e.target.files && onFileSelect(e.target.files)}
      />
      <label
        htmlFor="music-upload"
        className="flex flex-col items-center space-y-4 cursor-pointer"
      >
        {isUploading ? (
          <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
        ) : (
          <Upload className="w-12 h-12 text-purple-400" />
        )}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Upload Your Music</h3>
          <p className="text-sm text-gray-400">
            Drag and drop your audio files here, or click to browse
          </p>
          <p className="text-xs text-gray-500">
            Supported formats: MP3, WAV, FLAC (max 50MB)
          </p>
        </div>
      </label>
    </div>
  );
}