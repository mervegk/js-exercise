const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById('mobile-menu')
  if (!mobileMenu.classList.contains('flex')) {
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('flex')
  }
  else if (mobileMenu.classList.contains('flex')) {
    mobileMenu.classList.remove('flex')
    mobileMenu.classList.add('hidden')
  }
}