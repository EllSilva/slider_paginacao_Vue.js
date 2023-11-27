import get_template from '../../components/get_template.js'
import Carousel from '../../components/Carousel.js'

export default {

    components: { Carousel },

    data: function () {
        return {
            jms: "assets/imagem/desktop-pagina-1.png",
            slides: [
                "assets/imagem/1.jpg",
                "assets/imagem/2.jpg",
                "assets/imagem/3.jpg",
                "assets/imagem/4.jpg",
            ],

        }
    },

    computed: {

    },

    methods: {

    },

    async mounted() {
       
    },

    template: await get_template('./assets/js/view/home/home')
}