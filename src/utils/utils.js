export const resolveImagePath = (image) => {
    try {
      return require(`../assets/${image}`);
    } catch {
      console.log("Not loading")
    }
  };