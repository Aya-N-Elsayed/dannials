<script>
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const homeSectionHeight = document.querySelector('.home').offsetHeight;
        if (window.scrollY > homeSectionHeight) {
            navbar.classList.add('navbar-dark');
        } else {
            navbar.classList.remove('navbar-dark');
        }
    });
</script>
