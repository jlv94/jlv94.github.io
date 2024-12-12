async function contactForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const params = new URLSearchParams();
        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyyP8cUADtkLt42iFjlOZ2IHWtGzKiA135YDo9i09UkP1mk4Do9MJ1twRXXfiMFfAbv/exec', {
            method: 'POST',
            body: params
        });

        if (response.ok) {
            // Clear form
            form.reset();

            alert("Thank you for your request! We'll get back to you shortly.")

            // Redirect to the specified URL after successful submission
            window.location.href = 'https://jlv94.github.io/#contact-form';
            
        } else {
            console.error('Form submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}