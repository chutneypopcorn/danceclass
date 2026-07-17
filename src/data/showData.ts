export interface ShowSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  bpm: number;
  defaultTimestamp: number;
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

// Official default timestamps for each section (in seconds).
// These are the locked-in defaults that ship with the show.
// Update these values to match your actual pre-mixed track timing,
// then commit and push so everyone gets the same defaults.
export const DEFAULT_SECTION_TIMESTAMPS: number[] = [
  0,      // 00 - INTRO
  75,     // 01 - BACKUP
  180,    // 02 - KALA CHASHMA
  300,    // 03 - WHAT JHUMKA
  420,    // 04 - EK PAL KA JEENA
  540,    // 05 - SHAVA SHAVA
  660,    // 06 - PIYA PIYA
  780,    // 07 - THE RETIREMENT
  900,    // 08 - THE FRENZY
  1200,   // 09 - AKASH NUMBER
  1500,   // 10 - ASHA BHOSLE FINALE
];

export const showSections: ShowSection[] = [
  {
    id: 'intro',
    number: '00',
    title: 'INTRO',
    subtitle: 'The Disgusted Entrance',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[0],
    backingTrack: 'Zindagi Meri Dance (Instrumental)',
    triggerColor: 'from-pink-600 to-rose-700',
    script: [
      { speaker: 'STAGE', text: 'Lights down. The Zindagi Meri Dance instrumental begins pumping at 106 BPM. Mr Chaps struts onto stage already dancing — full commitment, maximum energy.', style: 'action' },
      { speaker: 'STAGE', text: 'He freezes. Looks out at the audience with visible disgust. Wipes a single imaginary tear.', style: 'action' },
      { speaker: 'MR CHAPS', text: 'Stop. Just... stop the music.', style: 'dialogue' },
      { speaker: 'STAGE', text: 'Music cuts. Silence. He stares at the audience.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Oh, Sydney. I am... shook. And not in the 'I just saw Hrithik at the gym' way.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Tell me something. Is this a dance floor? Or are we all queuing for the RTA in Parramatta?", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "I see sequins. I see leather. I see that one uncle who thinks he's still 24 — respect, uncle, we all have that uncle. But do I see movement? No.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "You're all standing there like the Wi-Fi just cut out mid-episode. Meanwhile I'm up here doing all the cardio for both of us. Unacceptable.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "So here's what's going to happen. I'm going to teach you. Yes, you. The person in the back pretending to text. I see you. We're doing this.", style: 'dialogue' },
    ]
  },
  {
    id: 'backup',
    number: '01',
    title: 'BACKUP',
    subtitle: 'The Dancer Introduction',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[1],
    backingTrack: 'Zindagi Meri Dance (Instrumental)',
    triggerColor: 'from-violet-600 to-purple-700',
    script: [
      { speaker: 'MR CHAPS', text: "But I can't do this alone. I'm a star, not a saint. So I brought some help.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Backup dancers enter — striking a pose mid-stage.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Wait. Wait wait wait. Are you three the backup dancers?", style: 'dialogue' },
      { speaker: 'STAGE', text: 'They nod confidently.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Then back. The fuck. Up. You're crowding my aura. This is my moment. Go to the back of the stage and don't come forward until you look at least half as expensive as I do.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Dancers dramatically retreat to the back, playing along.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Good. Much better. Now — who here actually knows how to dance? Be honest. No? Perfect. Fresh clay. Let's mould you.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "We're not doing boring choreography tonight. We're doing hook steps. The iconic ones. The ones your aunties do at weddings after three glasses of mango lassi. The ones that say 'I know this song and I am the main character right now.'", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Class is in session. First lesson — and it's a doozy.", style: 'dialogue' },
    ]
  },
  {
    id: 'kalachashma',
    number: '02',
    title: 'KALA CHASHMA',
    subtitle: 'The Ignorance Is Bliss',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[2],
    backingTrack: 'Zindagi Meri Dance → Kala Chashma blend',
    song: 'Kala Chashma',
    songNote: 'Chorus x2 — audience dances along',
    triggerColor: 'from-amber-500 to-orange-600',
    script: [
      { speaker: 'MR CHAPS', text: "Lesson One: The Kala Chashma. Or as I call it — 'The Ex at the Wedding.'", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Here's the psychology. You're at a family function. You see someone you used to know. Someone who wore *that* top. You know the one.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Step one — sunglasses on. Slowly. Like you just discovered sunlight. Step two — look away. With DISDAIN. Step three — shoulder brush. As if to say 'I have moved on. I have evolved. I have a skincare routine now.'", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Mr Chaps demonstrates. Backup dancers mirror from the back.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Everyone try it. Sunglasses. Judgment. Shoulder. Yes! I felt that from the back row! The uncle in the kurta — you're FEELING it, I can tell!", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Now let's see if you can handle the real thing. DJ — test them.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Music swells into Kala Chashma chorus. Mr Chaps and backup dancers lead the hook step. Audience joins in.', style: 'music' },
      { speaker: 'NOTE', text: 'Let the chorus play through. Encourage audience participation with gestures.', style: 'note' },
    ]
  },
  {
    id: 'jhumka',
    number: '03',
    title: 'WHAT JHUMKA',
    subtitle: 'The Rich Aunty Energy',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[3],
    backingTrack: 'Zindagi Meri Dance → What Jhumka blend',
    song: 'What Jhumka',
    songNote: 'Chorus x2 — audience dances along',
    triggerColor: 'from-emerald-500 to-teal-600',
    script: [
      { speaker: 'STAGE', text: 'Music seamlessly blends back to Zindagi Meri Dance instrumental.', style: 'music' },
      { speaker: 'MR CHAPS', text: "Stunning. Truly. Some of you have main-character energy I wasn't prepared for. That woman in the red — where have you been hiding? Yash Raj is calling.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Lesson Two: The What Jhumka. This isn't just a dance move. This is a lifestyle choice.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "This move says: 'Yes, these ARE real. And yes, they DID cost more than your rent.' It's rich aunty energy. The kind of aunty who arrives in a Mercedes to a shaadi and still complains about the catering.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Step one — point to the ear. Like you're showing off the goods. Step two — hip drop. Not a suggestion, a STATEMENT. Step three — that shoulder shimmy that says 'I have investments.'", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Demonstrates the move. The shoulder shimmy is theatrical and exaggerated.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Backup — show them how it's done. Audience — don't just watch. You're not at the cinema. MOVE.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "DJ — give us the Jhumka!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'What Jhumka chorus drops. Full energy. Everyone dancing.', style: 'music' },
    ]
  },
  {
    id: 'ekpal',
    number: '04',
    title: 'EK PAL KA JEENA',
    subtitle: 'The Hrithik Special',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[4],
    backingTrack: 'Zindagi Meri Dance → Ek Pal Ka Jeena blend',
    song: 'Ek Pal Ka Jeena',
    songNote: 'Chorus x2 — audience dances along',
    triggerColor: 'from-sky-500 to-blue-600',
    script: [
      { speaker: 'STAGE', text: 'Music transitions. Mr Chaps strikes the iconic Ek Pal Ka Jeena pose.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Oh. Oh no. You know what this is. Don't make me say it.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Audience recognizes the pose. Cheers erupt.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Yes. It's The Hrithik. The pose that launched a thousand gym memberships. The pose that made every boy in 2000 stand in front of a mirror thinking 'maybe if I tilt my head...'", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Lesson Three: The Ek Pal Ka Jeena. Arms out. Chest UP. Head tilt — not too much, you're not a curious puppy. And then... the step. The step that says 'I am handsome and I am AWARE of it.'", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Let's see those arms, Sydney! Wider! That person near the bar — put the drink DOWN, this is important! Yes! That's the energy!", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Now — who thinks they can do the turn? The full Hrithik spin? No? Wise. That move has injured many egos. DJ — drop it!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Ek Pal Ka Jeena chorus kicks in. Mr Chaps leads the iconic moves.', style: 'music' },
    ]
  },
  {
    id: 'shava',
    number: '05',
    title: 'SHAVA SHAVA',
    subtitle: 'The Wedding Classic',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[5],
    backingTrack: 'Zindagi Meri Dance → Shava Shava blend',
    song: 'Say Shava Shava',
    songNote: 'Chorus x2 — audience dances along',
    triggerColor: 'from-rose-500 to-red-600',
    script: [
      { speaker: 'STAGE', text: 'Music blends. Mr Chaps wipes his brow dramatically.', style: 'action' },
      { speaker: 'MR CHAPS', text: "I'm exhausted. You're exhausting. But we're not done. Oh no. We have to do the one. The ONE. The song that plays at every wedding, every sangeet, every function where someone opens a bottle of Royal Challenge.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Lesson Four: Shava Shava. This is not a dance. This is a CULTURAL OBLIGATION. If this song plays and you're not moving, your aunties are legally allowed to gossip about you for six months.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Arms up — like you're welcoming the baraat even though they're two hours late. Step touch — left, right, like you're squashing cockroaches in style. And then... the shoulder. THE SHOULDER. Give it some Punjabi energy!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Demonstrates with full commitment. Backup dancers go hard.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Now I need FULL PARTICIPATION on this one. No wallflowers. No 'I'm just here for the food.' Everyone. Arms. Up. NOW.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "DJ — make them say it!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Shava Shava drops. The entire room should be dancing. Maximum chaos.', style: 'music' },
    ]
  },
  {
    id: 'piyapiya',
    number: '06',
    title: 'PIYA PIYA',
    subtitle: 'The South Indian Surprise',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[6],
    backingTrack: 'Zindagi Meri Dance → Piya Piya blend',
    song: 'Piya Piya O Piya',
    songNote: 'Chorus x2 — audience dances along',
    triggerColor: 'from-yellow-500 to-amber-600',
    script: [
      { speaker: 'STAGE', text: 'Music transitions. Mr Chaps suddenly strikes a very different pose — hands in a classical position.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Wait. Wait. We're going somewhere different now. You thought we were done? No no no. I have DEPTH. I have RANGE.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Lesson Five: The South Indian Special. Piya Piya. The shoulder shimmy that launched a thousand memes. The song that made every 90s kid think they could do classical dance.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "This isn't just movement. This is storytelling. The hands say 'I am a delicate flower.' The shoulders say 'BUT I AM ALSO A PARTY.'", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Watch the hands — elegant. Graceful. Like you're accepting a samosa from your nani. Now the shoulders — ATTACK. Like you found out the samosa is actually from last week.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Demonstrates the classical-to-funny contrast. Backup dancers add their own flair.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Beautiful. Chaotic. Just like my love life. DJ — bring the Piya!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Piya Piya chorus drops. Audience joins in with the shoulder shimmy.', style: 'music' },
    ]
  },
  {
    id: 'retire',
    number: '07',
    title: 'THE RETIREMENT',
    subtitle: 'Passing The Torch',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[7],
    backingTrack: 'Zindagi Meri Dance (Instrumental)',
    triggerColor: 'from-slate-500 to-gray-600',
    script: [
      { speaker: 'STAGE', text: 'Music dips back to the instrumental. Mr Chaps looks around the room with exaggerated shock.', style: 'action' },
      { speaker: 'MR CHAPS', text: "Stop. Stop the music. Just... stop.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Music cuts.', style: 'action' },
      { speaker: 'MR CHAPS', text: "What is HAPPENING out there? You people... you people are GOOD. Like, actually good. That person in the corner? flawless hip action. That group near the front? synchronized! I didn't even teach you synchronization!", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "I'm looking at this room and I'm thinking... why am I even here? You're all already professionals. Yash Raj should be scouting this room RIGHT NOW.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "You know what? I'm retiring. Right now. Effective immediately. I'm going to the bar. I deserve a drink. I EARNED a drink. The way I taught you? Masterclass. Literal masterclass.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "But before I go — one last thing. You don't need me anymore. You know the moves. You have the energy. So DJ? Just... play the hits. All of them. Fast. Furious. No breaks. Let's see what this city is REALLY made of.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Lights down! Floor up! GO!", style: 'dialogue' },
    ]
  },
  {
    id: 'frenzy',
    number: '08',
    title: 'THE FRENZY',
    subtitle: 'Maximum Overdrive',
    bpm: 140,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[8],
    backingTrack: 'Fast medley at 1.5x speed',
    triggerColor: 'from-red-600 to-rose-700',
    script: [
      { speaker: 'STAGE', text: 'The medley kicks into high gear — songs play at rapid-fire pace, 30-45 seconds each.', style: 'action' },
      { speaker: 'STAGE', text: 'Mr Chaps runs around the stage reacting to each song with comedic panic.', style: 'action' },
      { speaker: 'MR CHAPS', text: "(screaming over Muqabla) MY KNEES! Someone call an ambulance!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Song: Muqabla — iconic Prabhu Deva moves', style: 'music' },
      { speaker: 'MR CHAPS', text: "(during Chikni Chameli) WHERE DID THIS COME FROM?! I wasn't ready!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Song: Chikni Chameli — high energy', style: 'music' },
      { speaker: 'MR CHAPS', text: "(during Munni Badnam) THE AUNTIES ARE TAKING OVER! RUN!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Song: Munni Badnam Hui — crowd favorite', style: 'music' },
      { speaker: 'MR CHAPS', text: "(during Aankh Marey) I can't feel my feet! But I also can't stop!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Song: Aankh Marey — everyone knows this one', style: 'music' },
      { speaker: 'MR CHAPS', text: "(during Sheila Ki Jawani) SHEILA! MY QUEEN! I DANCE FOR YOU!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Song: Sheila Ki Jawani — iconic Katrina moves', style: 'music' },
      { speaker: 'STAGE', text: 'The frenzy continues — O Saki Saki, Dilbar, Fevicol Se, and more rapid-fire hits.', style: 'action' },
      { speaker: 'NOTE', text: 'This section should be 3-4 minutes of pure chaos. Mr Chaps can interact with audience members, pretend to collapse, and generally lose his mind comically.', style: 'note' },
    ]
  },
  {
    id: 'akash',
    number: '09',
    title: 'AKASH NUMBER',
    subtitle: 'Special Guest Performance',
    bpm: 120,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[9],
    backingTrack: 'TBD — Akash to choose',
    triggerColor: 'from-indigo-500 to-blue-600',
    script: [
      { speaker: 'STAGE', text: 'Music winds down. Mr Chaps is on the floor, dramatically exhausted.', style: 'action' },
      { speaker: 'MR CHAPS', text: "(gasping) I can't... I physically cannot... my body is eighty percent biryani at this point...", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "But wait. I have a surprise. You thought I was the only talent here? No no no. I brought a RINGER.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Put your hands together for... AKASH!", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Akash enters to perform his number. Mr Chaps recovers at the side, acting as hype man.', style: 'action' },
      { speaker: 'NOTE', text: 'Akash performs his prepared number. Duration and song TBD with Akash.', style: 'note' },
      { speaker: 'MR CHAPS', text: "(during Akash's performance, to audience) Look at him! The talent! The commitment! And he does this WITHOUT my skincare routine!", style: 'dialogue' },
    ]
  },
  {
    id: 'ashafinale',
    number: '10',
    title: 'ASHA BHOSLE FINALE',
    subtitle: 'The Celebration Continues',
    bpm: 106,
    defaultTimestamp: DEFAULT_SECTION_TIMESTAMPS[10],
    backingTrack: 'Asha Bhosle medley mix',
    triggerColor: 'from-fuchsia-600 to-pink-700',
    script: [
      { speaker: 'STAGE', text: 'Akash finishes his number. Mr Chaps returns to center stage, visibly emotional.', style: 'action' },
      { speaker: 'MR CHAPS', text: "That was... that was beautiful. I'm not crying. It's just... confetti in my eye. Even though there's no confetti.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "But you know what? We're not done. We can't be done. Not yet. Because tonight... tonight we're celebrating a legend. A voice that has been the soundtrack to more weddings, more road trips, more heartbreaks, and more dance floors than any other.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Asha Bhosle. The queen. The OG. The reason half of you exist — because your parents danced to her songs at THEIR wedding.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "So here's what's going to happen. I'm going to step back. The DJ is going to take over. And we're going to play the hits. ALL the hits. The ones you know by heart. The ones your mother sings in the kitchen. The ones that make you text your ex at 2 AM.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "Chura Liya. Piya Tu. Dum Maro Dum. Yeh Mera Dil. In Ankhon Ki Masti. ALL OF THEM.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "So find someone. Anyone. Dance with them. Dance near them. Dance AT them. I don't care. Just dance.", style: 'dialogue' },
      { speaker: 'MR CHAPS', text: "This is Bar Bombay. This is Sydney. This is US. DJ — take us home.", style: 'dialogue' },
      { speaker: 'STAGE', text: 'Mr Chaps exits stage as the Asha Bhosle medley begins. The DJ takes over seamlessly.', style: 'action' },
      { speaker: 'NOTE', text: 'Asha Bhosle medley should include: Chura Liya Hai Tumne, Piya Tu Ab To Aaja, Dum Maro Dum, Yeh Mera Dil, In Ankhon Ki Masti Ke, and other iconic hits. 5-7 minutes of continuous Asha.', style: 'note' },
    ]
  }
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
