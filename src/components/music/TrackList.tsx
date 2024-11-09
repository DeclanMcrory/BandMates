import React from 'react';
import { Play, Pause, Music, Trash2 } from 'lucide-react';
import type { Track } from '../../types';

interface TrackListProps {
  tracks: Track[];
  onDelete: (id: string) => void;
}

export default function TrackList({ tracks, onDelete }: TrackListProps) {
  return (
    <div className="space-y-4">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="bg-white/5 rounded-lg p-4 flex items-center justify-between group hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-medium">{track.name}</h4>
              {track.artist && (
                <p className="text-sm text-gray-400">{track.artist}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {track.uploadProgress !== undefined && track.uploadProgress < 100 ? (
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${track.uploadProgress}%` }}
                />
              </div>
            ) : (
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Play className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => onDelete(track.id)}
              className="p-2 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}