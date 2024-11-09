export interface User {
  id: string;
  email: string;
  profile: {
    username: string;
    preferences: UserPreferences;
  };
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
}

export interface Character {
  id: string;
  userId: string;
  name: string;
  appearance: {
    model: string;
    animations: string[];
  };
  instrument: string;
  role: 'lead' | 'rhythm' | 'bass' | 'drums' | 'vocals';
}

export interface Track {
  id: string;
  name: string;
  artist?: string;
  genre: string;
  tempo: number;
  duration: number;
  instruments: string[];
  status: 'generating' | 'ready' | 'error';
  file?: File;
  uploadProgress?: number;
}

export interface UploadZoneProps {
  onFileSelect: (files: FileList) => void;
  isUploading: boolean;
}