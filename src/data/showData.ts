export interface ShowSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  bpm: number;
  script: ScriptLine[];
  song?: string;
  songNote?: string;
  backingTrack: string;
  triggerColor: string;
}

export interface ScriptLine {
  speaker: string;
  text: string;
  style: 'dialogue' | 'action' | 'music' | 'note';
}

export const SHOW_TITLE = "MR CHAPS' DANCE MASTERCLASS";
export const SHOW_SUBTITLE = "SHOW 3 // BAR BOMBAY // SYDNEY";

export const showSections: ShowSection[] = [
  // ... (all your show data here)
];

export const frenzySongs = [
  { title: 'Muqabla', artist: 'A.R. Rahman', note: 'Iconic Prabhu Deva moves' },
  { title: 'Chikni Chameli', artist: 'Shreya Ghoshal', note: 'High energy Katrina' },
  { title: 'Munni Badnam Hui', artist: 'Mamta Sharma', note: 'Crowd goes wild' },
  { title: 'Aankh Marey', artist: 'Neha Kakkar', note: 'Everyone knows this' },
  { title: 'Sheila Ki Jawani', artist: 'Sunidhi Chauhan', note: 'Iconic Katrina' },
  { title: 'O Saki Saki', artist: 'Neha Kakkar', note: 'Nora Fatehi energy' },
  { title: 'Dilbar', artist: 'Neha Kakkar', note: 'Middle Eastern vibes' },
  { title: 'Fevicol Se', artist: 'Mamta Sharma', note: 'Dabangg chaos' },
];

export const ashaSongs = [
  { title: 'Chura Liya Hai Tumne Jo Dil Ko', film: 'Yaadon Ki Baaraat (1973)' },
  { title: 'Piya Tu Ab To Aaja', film: 'Caravan (1971)' },
  { title: 'Dum Maro Dum', film: 'Hare Rama Hare Krishna (1971)' },
  { title: 'Yeh Mera Dil', film: 'Don (1978)' },
  { title: 'In Ankhon Ki Masti Ke', film: 'Umrao Jaan (1981)' },
  { title: 'O Mere Sona Re', film: 'Teesri Manzil (1966)' },
  { title: 'Aaiye Meherbaan', film: 'Howrah Bridge (1958)' },
  { title: 'Jaaiye Aap Kahan Jaayenge', film: 'Mere Sanam (1965)' },
];
