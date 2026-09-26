import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class ImakuniSDoduo_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Frenzied Escape", powerType: PowerType.ABILITY, text: "When this Doduo retreats, hold this card and throw it as hard as you can because Doduo is running away. Throw the card horizontally with a snap to get the farthest distance!", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Harmonize", cost: [], damage: "30", text: "From the moment you use this attack, you must begin to sing a song. (While the song is being sung, the game continues.) When the song is finished, this attack does 30 damage." }
  ];
  public set: string = "EVO";
  public name: string = "Imakuni?'s Doduo";
  public fullName: string = "Imakuni?'s Doduo EVO 112";
  public text: string = "Imakuni?'s Doduo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
