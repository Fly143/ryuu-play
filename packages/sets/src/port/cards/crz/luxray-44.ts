import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Luxray_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Luxio";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Explosiveness", powerType: PowerType.ABILITY, text: "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seeking Fang", cost: [], damage: "50", text: "Search your deck for up to 2 Trainer cards, reveal them, and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "CRZ";
  public name: string = "Luxray";
  public fullName: string = "Luxray CRZ 44";
  public text: string = "Luxray";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchTrainerToHand:1 */ state;
    }
    return state;
  }
}
