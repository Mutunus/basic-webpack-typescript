export class Store {
    constructor() {
        this.activeTab = 'about'
        this.textOptionsDict = this.getTextOptionsDict();
    }

    getTextOptionsDict() {
        return {
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio tenetur, tempore saepe quae reprehenderit aliquam enim, dolores repudiandae rem dolorum beatae ipsum! Exercitationem assumenda provident harum modi placeat numquam quisquam labore ut qui molestias culpa maxime aperiam, aut doloremque, at tempora quod libero asperiores voluptatibus. Beatae optio nesciunt, quisquam praesentium cum tempore deleniti quas, dicta illo obcaecati vel voluptatum tenetur? Non consectetur commodi inventore cumque, illo ipsum! Eaque doloremque recusandae similique quidem deleniti soluta placeat magnam facere quas? Natus quaerat nesciunt suscipit ut exercitationem dolorum impedit facere fuga molestiae cum. Iste odio corporis quos iusto minima omnis distinctio quod.',
            contact: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio tenetur, tempore saepe quae reprehenderit aliquam enim, dolores repudiandae rem dolorum beatae ipsum!'
        }
    }

}