module.exports = {
    name: "role",
    run: async (bot, interaction, parameters) => {
        const roleId = parameters[0]
        if (!interaction.guild)
            return interaction.reply({content: "You have to be in an actual server to use this command lol", ephemeral: true})
        
            const role = await interaction.guild.roles.fetch(roleId)
            if (!role)
                return interaction.reply({content: "Can't find the role sadge", ephemeral: true})
            
            const member = await interaction.guild.members.fetch(interaction.member.id)

            // member has the role => remove role
            if (member.roles.cache.has(role.id)){
                await member.roles.remove(role.id)
                return interaction.reply({ content: `Removed the role "${role.name}"`, ephemeral: true})
            }
            // member doesn't have the role => add role
            else {
                await member.roles.add(role.id)
                return interaction.reply({ content: `Added the role "${role.name}"`, ephemeral: true})
            }

    }
}