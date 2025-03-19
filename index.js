/// <reference types="../CTAutocomplete" />

const C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");

let replaceParticles = false;

register("packetSent", (packet, event) => {
    replaceParticles = Player.getInventory()?.getItems()?.[packet.func_149614_c()]?.getName().includes("Flaming Flay");
}).setFilteredClass(C09PacketHeldItemChange);

register("spawnParticle", (particle, type, event) => {
    if (!replaceParticles) return;
    if (type.toString() != "REDSTONE") return;
    particle.setColor(Math.random(), Math.random(), Math.random());
});