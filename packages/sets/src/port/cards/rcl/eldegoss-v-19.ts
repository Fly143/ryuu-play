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

export class EldegossV_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Happy Match", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Float Up", cost: [], damage: "50", text: "You may shuffle this Pokémon and all attached cards into your deck." }
  ];
  public set: string = "RCL";
  public name: string = "Eldegoss V";
  public fullName: string = "Eldegoss V RCL 19";
  public text: string = "Eldegoss V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
