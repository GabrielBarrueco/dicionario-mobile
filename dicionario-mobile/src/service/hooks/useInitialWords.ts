export const useInitialWords = ():string[]  => {
  const randomWords: string[] = [];

  const words = [
    "apple", "banana", "orange", "grape", "pear", "kiwi", "strawberry", "pineapple", "blueberry", "watermelon",
    "cat", "dog", "rabbit", "hamster", "turtle", "parrot", "goldfish", "ferret", "guinea pig", "horse",
    "desk", "chair", "bookshelf", "table", "lamp", "couch", "rug", "mirror", "wardrobe", "drawer",
    "car", "bicycle", "motorcycle", "truck", "bus", "train", "plane", "boat", "helicopter", "submarine",
    "computer", "keyboard", "mouse", "monitor", "printer", "scanner", "laptop", "tablet", "smartphone", "headphones",
    "pizza", "hamburger", "sandwich", "sushi", "taco", "pasta", "salad", "steak", "soup", "chicken",
    "sun", "moon", "star", "cloud", "rain", "snow", "wind", "thunder", "lightning", "tornado",
    "tree", "flower", "grass", "bush", "rock", "mountain", "river", "lake", "ocean", "beach",
    "teacher", "student", "principal", "librarian", "doctor", "nurse", "police officer", "firefighter", "soldier",
    "basketball", "soccer", "football", "tennis", "baseball", "volleyball", "golf", "swimming", "cycling",
    "movie", "music", "book", "painting", "sculpture", "dance", "theater", "opera", "poem", "photograph",
    "baby", "child", "teenager", "adult", "senior", "parent", "grandparent", "sibling", "cousin", "friend",
    "love", "hate", "joy", "sadness", "anger", "fear", "surprise", "disgust", "excitement", "contentment",
    "school", "university", "college", "preschool", "kindergarten", "library", "museum", "zoo", "park", "playground",
    "house", "apartment", "condo", "mansion", "cabin", "castle", "tent", "igloo", "barn", "shack",
    "bed", "pillow", "blanket", "sheet", "mattress", "duvet", "quilt", "comforter", "throw", "pillowcase",
    "pen", "pencil", "marker", "crayon", "chalk", "eraser", "ruler", "scissors", "glue", "tape",
    "beard", "mustache", "sideburns", "hair", "eyebrows", "eyelashes", "nose", "ears", "mouth", "teeth",
    "shirt", "pants", "shorts", "dress", "skirt", "jacket", "coat", "sweater", "hoodie", "tie",
    "shoes", "boots", "sandals", "sneakers", "heels", "flats", "slippers", "flip-flops", "socks", "tights",
    "glasses", "sunglasses", "contacts", "eyepatch", "monocle", "binoculars", "telescope", "microscope", "magnifying glass", "camera"
  ];

  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }

  return randomWords;
}
