const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "roleselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select role").setDescription("Select your role from the buttons below :D").setColor("RANDOM")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-941366201156784179").setStyle("PRIMARY").setLabel("Test role")
                ])
            ]
        })
    }
}