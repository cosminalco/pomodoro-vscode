const sound = require("sound-play");

export class Sound {
  private resetSoundPath =
    process.platform == "darwin"
      ? "/System/Library/Components/CoreAudio.component/Contents/SharedSupport/SystemSounds/system/SentMessage.caf"
      : "";
  private startSoundPath =
    process.platform == "darwin"
      ? "/System/Library/Components/CoreAudio.component/Contents/SharedSupport/SystemSounds/system/payment_success.aif"
      : "";
  private pauseSoundPath =
    process.platform == "darwin"
      ? "/System/Library/Components/CoreAudio.component/Contents/SharedSupport/SystemSounds/system/payment_failure.aif"
      : "";
  private path = "";
  constructor(state: string) {
    if (state == "paused") this.path = this.getPauseSoundPath;
    else if (state == "started") this.path = this.getStartSoundPath;
    else if (state == "reset") this.path = this.getResetSoundPath;
    else this.path = this.getStartSoundPath;
  }
  play(): void {
    if (process.platform != "darwin") return;
    sound.play(this.path);
  }
  get getPauseSoundPath(): string {
    return this.pauseSoundPath;
  }
  get getStartSoundPath(): string {
    return this.startSoundPath;
  }
  get getResetSoundPath(): string {
    return this.resetSoundPath;
  }
}
