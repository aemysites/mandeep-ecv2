export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-resources-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-resources-img-col');
          // Add shadow to images
          const img = pic.querySelector('img');
          if (img) {
            img.style.boxShadow = '4px 4px 24px rgba(0, 0, 0, 0.4)';
          }
        }
      }

      // Style buttons with yellow background
      const buttons = col.querySelectorAll('a.button');
      buttons.forEach((button) => {
        button.classList.add('button-yellow');
      });
    });
  });
}
