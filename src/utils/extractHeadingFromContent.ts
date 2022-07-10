export const extractHeadingFromContent = (content) => {

  const heading = content.find((el) => el.type === "h2");
  const newContent = content.filter((el) => el.key !== heading?.key);
  return {
    heading,
    content: newContent,
  }
}