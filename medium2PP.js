function compare(word1, word2) {
    const { length } = word1
  
    if (length !== word2.length) {
      return false
    }
    
    const charCounts = {}
  
    for (let i = 0; i < length; i++) {
      const char1 = word1[i]
      const char2 = word2[i]
  
      charCounts[char1] = (charCounts[char1] || 0) + 1
      charCounts[char2] = (charCounts[char2] || 0) - 1
    }
  
    for (const char in charCounts) {
      if (charCounts[char]) {
        return false
      }
    }
  
    return true
  }