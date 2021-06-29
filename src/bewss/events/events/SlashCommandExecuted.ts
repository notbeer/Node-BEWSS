import bewss from "src/bewss/bewss"

class SlashCommandExecuted {
  private bewss: bewss
  public eventName: string

  constructor(bewss: bewss) {
    this.bewss = bewss
    this.eventName = 'SlashCommandExecuted'
  }

  async onEnabled(): Promise<void> {
    this.bewss.getEventManager().registerEvent(this.eventName)
    this.bewss.getServerManager().getServer()
      .on('message', (packet: string) => {
        const parsedPacket = JSON.parse(packet)
        if (parsedPacket.header.requestId == '00000000-0000-0000-0000-000000000000') {
          this.bewss.getEventManager().emit(this.eventName, parsedPacket)
        } else {
          this.bewss.getEventManager().emit('SlashCommandExecutedConsole', parsedPacket)
        }
      })
  }

  async onDisabled(): Promise<void> {
    this.bewss.getEventManager().unregisterEvent(this.eventName)
  }

}

export = SlashCommandExecuted
