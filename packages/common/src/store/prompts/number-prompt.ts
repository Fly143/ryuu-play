import { GameMessage } from '../../game-message';
import { Prompt } from './prompt';

export interface NumberPromptOptions {
  allowCancel: boolean;
  defaultValue: number;
  min: number;
  max: number;
  /** Display unit hint, e.g. 'm' for meters. */
  unit: string;
}

/**
 * Free numeric input from the player (e.g. guess a Pokemon's height).
 * Result is the number the player entered.
 */
export class NumberPrompt extends Prompt<number> {

  readonly type: string = 'Number';

  public options: NumberPromptOptions;

  constructor(
    playerId: number,
    public message: GameMessage,
    options?: Partial<NumberPromptOptions>,
  ) {
    super(playerId);

    this.options = Object.assign({}, {
      allowCancel: false,
      defaultValue: 0,
      min: 0,
      max: 10000,
      unit: '',
    }, options);
  }

}
