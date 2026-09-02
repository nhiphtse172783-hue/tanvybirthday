


    const form = document.getElementById('answerForm');
    const input = document.getElementById('answerInput');
    const status = document.getElementById('answerStatus');
    const saved = localStorage.getItem('birthday-answer');
    const wishApiUrl = birthdayConfig.wishApiUrl;

    if (saved) {
      input.value = saved;
      status.textContent = 'saved answer: ' + saved;
      status.classList.add('is-visible');
    }

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      const value = input.value.trim();

      if (!value) {
        status.textContent = 'Your answer matters too — just a few words is enough.';
        status.classList.add('is-visible');
        input.focus();
        return;
      }

      status.textContent = 'đợi xíu, anh đang nhận điều ước của em nè';
      status.classList.add('is-visible');

      try {
        const response = await fetch(wishApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            wish: value,
            createdAt: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        localStorage.setItem('birthday-answer', value);
        status.textContent = 'anh thấy điều ước rồi nhe';
        status.classList.add('is-visible');
      } catch (error) {
        localStorage.setItem('birthday-answer', value);
        status.textContent = 'Saved locally. Please check your connection and try again.';
        status.classList.add('is-visible');
      }
    });
  