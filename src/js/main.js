const textarea = document.getElementById('generator-area')


    function generatecode() {
        let code = '';
        let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(var i = 0; i < 19; i++){
            code = code + dict.charAt(Math.floor(Math.random() * dict.length));
        }
        return code;
    }

    function putcode() {
        textarea.innerHTML = `
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
        discord.gift/${generatecode()}
    `
    }

    function openwebhookwindow() {
        IPC.send('webhookWindow')
    }