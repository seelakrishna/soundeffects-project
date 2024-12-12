import { Sound } from '../types/sound';

export const sounds: Sound[] = [
  // Nature Sounds
  {
    id: 'thunder',
    name: 'Thunderstorm',
    category: 'nature',
    description: 'Intense thunderclaps with heavy rainfall and dramatic lightning strikes, perfect for creating a stormy atmosphere',
    url: 'https://assets.mixkit.co/active_storage/sfx/2434/2434-preview.mp3',
    image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rain',
    name: 'Rainfall',
    category: 'nature',
    description: 'Gentle rainfall with a soothing rhythm',
    url: 'https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3',
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'birds',
    name: 'Birds Chirping',
    category: 'nature',
    description: 'Morning birds singing in a peaceful forest setting',
    url: 'https://assets.mixkit.co/active_storage/sfx/2520/2520-preview.mp3',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wind',
    name: 'Wind Blowing',
    category: 'nature',
    description: 'Strong wind gusts rustling through trees and leaves',
    url: 'https://assets.mixkit.co/active_storage/sfx/2432/2432-preview.mp3',
    image: 'https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ocean',
    name: 'Ocean Waves',
    category: 'nature',
    description: 'Gentle ocean waves rolling onto the shore with seabirds in the distance',
    url: 'https://assets.mixkit.co/active_storage/sfx/2437/2437-preview.mp3',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'birds-forest',
    name: 'Forest Birds',
    category: 'nature',
    description: 'Various birds chirping in a dense forest environment',
    url: 'https://assets.mixkit.co/active_storage/sfx/2525/2525-preview.mp3',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  },

  // Environmental Sounds
  {
    id: 'footsteps-gravel',
    name: 'Footsteps on Gravel',
    category: 'environmental',
    description: 'Crunching sound of boots on gravel',
    url: 'https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3',
    image: 'https://images.unsplash.com/photo-1581794236300-acd130b0550e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'footsteps-wood',
    name: 'Footsteps on Wood',
    category: 'environmental',
    description: 'Hollow wooden floor creaking under footsteps',
    url: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
    image: 'https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'footsteps-snow',
    name: 'Footsteps on Snow',
    category: 'environmental',
    description: 'Crisp crunching of fresh snow under boots',
    url: 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3',
    image: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stream',
    name: 'Stream Flowing',
    category: 'environmental',
    description: 'Gentle bubbling of a small forest stream',
    url: 'https://assets.mixkit.co/active_storage/sfx/2442/2442-preview.mp3',
    image: 'https://images.unsplash.com/photo-1444090695923-48e08781a76a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'river',
    name: 'River Flowing',
    category: 'environmental',
    description: 'Strong current of a river with rapids',
    url: 'https://assets.mixkit.co/active_storage/sfx/2443/2443-preview.mp3',
    image: 'https://images.unsplash.com/photo-1516132006923-6cf348e5dee2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'waterfall',
    name: 'Waterfall',
    category: 'environmental',
    description: 'Powerful rushing water of a large waterfall',
    url: 'https://assets.mixkit.co/active_storage/sfx/2444/2444-preview.mp3',
    image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fire',
    name: 'Fire Crackling',
    category: 'environmental',
    description: 'Cozy crackling of a campfire',
    url: 'https://assets.mixkit.co/active_storage/sfx/2445/2445-preview.mp3',
    image: 'https://images.unsplash.com/photo-1475732744046-a0c2486b246c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'leaves',
    name: 'Leaves Rustling',
    category: 'environmental',
    description: 'Dry leaves rustling in the wind',
    url: 'https://assets.mixkit.co/active_storage/sfx/2446/2446-preview.mp3',
    image: 'https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'traffic',
    name: 'City Traffic',
    category: 'environmental',
    description: 'Busy city street with passing vehicles',
    url: 'https://assets.mixkit.co/active_storage/sfx/2447/2447-preview.mp3',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80'
  },

  // Technology Sounds
  {
    id: 'typing',
    name: 'Keyboard Typing',
    category: 'technology',
    description: 'Mechanical keyboard typing sounds',
    url: 'https://assets.mixkit.co/active_storage/sfx/2016/2016-preview.mp3',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'notification',
    name: 'Phone Notification',
    category: 'technology',
    description: 'Modern smartphone notification sound',
    url: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'camera',
    name: 'Camera Shutter',
    category: 'technology',
    description: 'Professional camera shutter click',
    url: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'engine',
    name: 'Engine Starting',
    category: 'technology',
    description: 'Car engine starting and revving',
    url: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80'
  },

  // Animal Sounds
  {
    id: 'dog-bark',
    name: 'Dog Barking',
    category: 'animals',
    description: 'Medium-sized dog barking sound',
    url: 'https://assets.mixkit.co/active_storage/sfx/2522/2522-preview.mp3',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cat-meow',
    name: 'Cat Meowing',
    category: 'animals',
    description: 'Soft and gentle cat meow sound',
    url: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cow-moo',
    name: 'Cow Mooing',
    category: 'animals',
    description: 'Deep and resonant cow moo sound',
    url: 'https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3',
    image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'horse-gallop',
    name: 'Horse Galloping',
    category: 'animals',
    description: 'Rhythmic sound of horse hooves galloping',
    url: 'https://assets.mixkit.co/active_storage/sfx/2574/2574-preview.mp3',
    image: 'https://images.unsplash.com/photo-1450052590821-8bf91254a353?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'owl-hoot',
    name: 'Owl Hooting',
    category: 'animals',
    description: 'Mysterious owl hooting in the night',
    url: 'https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3',
    image: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&w=800&q=80'
  },

  // Human Sounds
  {
    id: 'laugh',
    name: 'Laughter',
    category: 'human',
    description: 'Genuine human laughter, warm and friendly',
    url: 'https://assets.mixkit.co/active_storage/sfx/2526/2526-preview.mp3',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sigh',
    name: 'Sigh',
    category: 'human',
    description: 'Deep exhale expressing tiredness or relief',
    url: 'https://assets.mixkit.co/active_storage/sfx/2576/2576-preview.mp3',
    image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cough',
    name: 'Cough',
    category: 'human',
    description: 'Clear throat cough sound',
    url: 'https://assets.mixkit.co/active_storage/sfx/2577/2577-preview.mp3',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    category: 'human',
    description: 'Regular human heartbeat rhythm',
    url: 'https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  },

  // Action Sounds
  {
    id: 'glass-break',
    name: 'Glass Breaking',
    category: 'action',
    description: 'Sound of glass shattering into pieces',
    url: 'https://assets.mixkit.co/active_storage/sfx/2498/2498-preview.mp3',
    image: 'https://images.unsplash.com/photo-1579548520664-b1a7f91f956e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'punch',
    name: 'Punch Impact',
    category: 'action',
    description: 'Dramatic punch or kick impact sound',
    url: 'https://assets.mixkit.co/active_storage/sfx/2579/2579-preview.mp3',
    image: 'https://images.unsplash.com/photo-1549824506-b53763ddb1eb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'explosion',
    name: 'Explosion',
    category: 'action',
    description: 'Powerful explosion with debris and aftermath',
    url: 'https://assets.mixkit.co/active_storage/sfx/2580/2580-preview.mp3',
    image: 'https://images.unsplash.com/photo-1495573258723-2c7be13a3d2f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gunshot',
    name: 'Gunshot',
    category: 'action',
    description: 'Sharp gunshot with echo',
    url: 'https://assets.mixkit.co/active_storage/sfx/2581/2581-preview.mp3',
    image: 'https://images.unsplash.com/photo-1584226761916-21c4b54d82e6?auto=format&fit=crop&w=800&q=80'
  }
];