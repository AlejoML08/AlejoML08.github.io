const { createApp } = Vue;

createApp({
    data() {
        return {
            proyectos: [
                {
                    titulo: 'Renovación Interior',
                    descripcion: 'Transformación completa de sala de estar',
                    imagen: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14'
                },
                {
                    titulo: 'Exterior Residencial',
                    descripcion: 'Pintura exterior con acabado premium',
                    imagen: 'https://images.unsplash.com/photo-1513694203232-719a280e022f'
                },
                {
                    titulo: 'Proyecto Comercial',
                    descripcion: 'Renovación de espacios comerciales',
                    imagen: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da'
                }
            ]
        }
    },
    methods: {
        contactar() {
            alert('¡Gracias por su interés! Pronto nos pondremos en contacto.');
        }
    }
}).mount('#app');
