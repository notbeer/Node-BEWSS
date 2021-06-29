import bewss from "src/bewss/bewss"

class BlockBroken {
  private bewss: bewss
  public eventName: string

  constructor(bewss: bewss) {
    this.bewss = bewss
    this.eventName = 'BlockBroken'
  }

  async onEnabled(): Promise<void> {
    this.bewss.getEventManager().registerEvent(this.eventName)
    this.bewss.getServerManager().getServer()
      .on('message', (packet: string) => {
        const parsedPacket = JSON.parse(packet)
        if (parsedPacket.header.messagePurpose != 'event') return
        if (parsedPacket.body.eventName != this.eventName) return
        console.log(parsedPacket);
        this.bewss.getEventManager().emit(this.eventName, parsedPacket)
      })
  }

  async onDisabled(): Promise<void> {
    this.bewss.getEventManager().unregisterEvent(this.eventName)
  }

}

export = BlockBroken
