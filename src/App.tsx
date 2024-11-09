import React from 'react';
import Layout from './components/core/Layout';
import MusicUploader from './components/music/MusicUploader';

function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Create Your Virtual Band
          </h1>
          <p className="text-gray-300 text-lg">
            Generate amazing music videos with AI-powered virtual band members
          </p>
        </section>

        <div className="space-y-8">
          <MusicUploader />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
              <h2 className="text-xl font-semibold mb-4">Create Characters</h2>
              <p className="text-gray-400">
                Design and customize your virtual band members with unique looks and instruments
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
              <h2 className="text-xl font-semibold mb-4">Generate Music</h2>
              <p className="text-gray-400">
                Let AI compose original tracks in your preferred genre and style
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;