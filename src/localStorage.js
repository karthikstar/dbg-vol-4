export const loadState = () => {
    try {
      const suitState = localStorage.getItem('suit');
      const lineupState = localStorage.getItem('lineup');
      
      if (suitState === null && lineupState === null) {
        return undefined;
      } else if (suitState != null && lineupState === null) {
        return { suit: JSON.parse(suitState) }
      } else if (suitState === null && lineupState != null) {
        return { lineup: JSON.parse(lineupState) }
      } else {
        // suitState != null && lineupState != null
        return { suit: JSON.parse(suitState), lineup: JSON.parse(lineupState) }
      }
    } catch (err) {
      return undefined;
    }
  }; 