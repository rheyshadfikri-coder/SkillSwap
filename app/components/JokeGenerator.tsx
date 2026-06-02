'use client';

import { motion } from 'framer-motion';
import { RotateCw, Copy, Share2 } from 'lucide-react';
import { useState } from 'react';

interface Joke {
  setup: string;
  delivery: string;
  joke?: string;
}

const JokeGenerator = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
      const data = await response.json();
      setJoke(data);
      setCopied(false);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    let jokeText = '';
    if (joke?.setup && joke?.delivery) {
      jokeText = `${joke.setup}\n${joke.delivery}`;
    } else if (joke?.joke) {
      jokeText = joke.joke;
    }
    
    navigator.clipboard.writeText(jokeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareJoke = async () => {
    let jokeText = '';
    if (joke?.setup && joke?.delivery) {
      jokeText = `${joke.setup}\n${joke.delivery}`;
    } else if (joke?.joke) {
      jokeText = joke.joke;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this joke!',
          text: jokeText,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12">
      <div className="container-max container-fluid">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl md:text-6xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gradient">Random Joke</span>
              <br />
              <span className="text-white">Generator</span>
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get a random laugh with our joke API
            </motion.p>
          </div>

          {/* Joke Card */}
          <motion.div
            className="glass-dark p-8 rounded-2xl mb-8 min-h-48 flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            {loading ? (
              <motion.div
                className="flex items-center justify-center h-32"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RotateCw className="text-blue-400" size={48} />
              </motion.div>
            ) : joke ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {joke.setup && joke.delivery ? (
                  <div>
                    <p className="text-xl text-gray-200 mb-6">{joke.setup}</p>
                    <motion.p
                      className="text-2xl font-semibold text-blue-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {joke.delivery}
                    </motion.p>
                  </div>
                ) : (
                  <p className="text-2xl text-gray-200">{joke.joke}</p>
                )}
              </motion.div>
            ) : (
              <div className="text-center">
                <p className="text-gray-400 text-lg">
                  Click the button to get a random joke!
                </p>
              </div>
            )}
          </motion.div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              onClick={fetchJoke}
              disabled={loading}
              className="btn btn-primary w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCw size={20} />
              Get New Joke
            </motion.button>

            <motion.button
              onClick={copyToClipboard}
              disabled={!joke}
              className="btn btn-secondary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={joke ? { scale: 1.05 } : {}}
              whileTap={joke ? { scale: 0.95 } : {}}
            >
              <Copy size={20} />
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>

            <motion.button
              onClick={shareJoke}
              disabled={!joke}
              className="btn btn-outline w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={joke ? { scale: 1.05 } : {}}
              whileTap={joke ? { scale: 0.95 } : {}}
            >
              <Share2 size={20} />
              Share
            </motion.button>
          </div>

          {/* Joke Stats */}
          {joke && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-400 text-sm">
                Powered by{' '}
                <a
                  href="https://jokeapi.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  JokeAPI
                </a>
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default JokeGenerator;
