import React, { useState, useCallback } from 'react';
import UploadZone from './UploadZone';
import TrackList from './TrackList';
import type { Track } from '../../types';

export default function MusicUploader() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = useCallback((files: FileList) => {
    setIsUploading(true);
    
    Array.from(files).forEach((file) => {
      const track: Track = {
        id: crypto.randomUUID(),
        name: file.name.replace(/\.[^/.]+$/, ""),
        genre: "",
        tempo: 0,
        duration: 0,
        instruments: [],
        status: 'ready',
        file,
        uploadProgress: 0
      };

      setTracks(prev => [...prev, track]);

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setTracks(prev =>
          prev.map(t =>
            t.id === track.id
              ? { ...t, uploadProgress: progress }
              : t
          )
        );

        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
        }
      }, 300);
    });
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTracks(prev => prev.filter(track => track.id !== id));
  }, []);

  return (
    <div className="space-y-8">
      <UploadZone onFileSelect={handleFileSelect} isUploading={isUploading} />
      {tracks.length > 0 && (
        <TrackList tracks={tracks} onDelete={handleDelete} />
      )}
    </div>
  );
}