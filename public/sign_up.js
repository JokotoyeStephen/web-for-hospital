  // Tab switching between Patient and Doctor
    const patientTab = document.getElementById('patientTab');
    const doctorTab = document.getElementById('doctorTab');
    const patientForm = document.getElementById('patientForm');
    const doctorForm = document.getElementById('doctorForm');
    const otpSection = document.getElementById('otpSection');
    let activeUser = null;
    let generatedOTP = "";
    let emailUsed = "";

    patientTab.addEventListener('click', () => {
      patientForm.classList.remove('hidden');
      doctorForm.classList.add('hidden');
      patientTab.classList.add('bg-blue-600', 'text-white');
      doctorTab.classList.remove('bg-green-600', 'text-white');
      doctorTab.classList.add('bg-gray-200', 'text-gray-700');
    });

    doctorTab.addEventListener('click', () => {
      doctorForm.classList.remove('hidden');
      patientForm.classList.add('hidden');
      doctorTab.classList.add('bg-green-600', 'text-white');
      patientTab.classList.remove('bg-blue-600', 'text-white');
      patientTab.classList.add('bg-gray-200', 'text-gray-700');
    });

    // Toggle password visibility
    function togglePassword(id, icon) {
      const input = document.getElementById(id);
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('bx-hide', 'bx-show');
      } else {
        input.type = 'password';
        icon.classList.replace('bx-show', 'bx-hide');
      }
    }

    // Helper to send OTP
    async function sendOtp(email) {
      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        generatedOTP = data.otp;
        emailUsed = email;
        return true;
      } else return false;
    }

    // Patient Registration
    document.getElementById('patientSignup').addEventListener('submit', async (e) => {
      e.preventDefault();
      const pass = pPassword.value;
      const confirm = pConfirm.value;
      if (pass !== confirm) {
        pError.textContent = "Passwords do not match!";
        pError.classList.remove('hidden');
        return;
      }
      pError.classList.add('hidden');
      const email = pEmail.value.trim();
      const otpSent = await sendOtp(email);
      if (otpSent) {
        activeUser = "patient";
        patientForm.classList.add('hidden');
        otpSection.classList.remove('hidden');
      } else {
        alert("Failed to send OTP. Try again.");
      }
    });

    // Doctor Registration
    document.getElementById('doctorSignup').addEventListener('submit', async (e) => {
      e.preventDefault();
      const pass = dPassword.value;
      const confirm = dConfirm.value;
      if (pass !== confirm) {
        dError.textContent = "Passwords do not match!";
        dError.classList.remove('hidden');
        return;
      }
      dError.classList.add('hidden');
      const email = dEmail.value.trim();
      const otpSent = await sendOtp(email);
      if (otpSent) {
        activeUser = "doctor";
        doctorForm.classList.add('hidden');
        otpSection.classList.remove('hidden');
      } else {
        alert("Failed to send OTP. Try again.");
      }
    });

    // Verify OTP
    document.getElementById('verifyOtpBtn').addEventListener('click', () => {
      const userOtp = otpInput.value.trim();
      if (userOtp === generatedOTP) {
        otpError.classList.add('hidden');
        alert("✅ " + activeUser + " registration verified successfully!");
        otpSection.classList.add('hidden');
        location.reload();
      } else {
        otpError.classList.remove('hidden');
      }
    });

    // Resend OTP
    document.getElementById('resendOtp').addEventListener('click', async () => {
      if (emailUsed) {
        const ok = await sendOtp(emailUsed);
        if (ok) alert("New OTP sent to " + emailUsed);
      }
    });


