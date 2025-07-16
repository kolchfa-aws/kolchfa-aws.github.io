document.addEventListener('DOMContentLoaded', function () {
  const commentTextArea = document.getElementById('message');
  const numCharsLabel = document.getElementById('char-counter');

  if (commentTextArea && numCharsLabel) {
    commentTextArea.addEventListener('input', function () {
      let currentLength = commentTextArea.value.length;

      if (currentLength > 600) {
        commentTextArea.value = commentTextArea.value.substring(0, 600);
        currentLength = 600;
      }

      const counter = 600 - currentLength;
      numCharsLabel.innerText = counter + ' characters left';
    });

    commentTextArea.addEventListener('paste', function () {
      setTimeout(() => {
        if (commentTextArea.value.length > 600) {
          commentTextArea.value = commentTextArea.value.substring(0, 600);
          const counter = 600 - commentTextArea.value.length;
          numCharsLabel.innerText = counter + ' characters left';
        }
      }, 10);
    });
  }
});
