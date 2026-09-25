import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class JirachiEX_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stellar Guidance", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench, you may search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypnostrike", cost: [], damage: "60", text: "Both this Pokémon and the Defending Pokémon are now Asleep." }
  ];
  public set: string = "FFI";
  public name: string = "Jirachi-EX";
  public fullName: string = "Jirachi-EX FFI 60";
  public text: string = "Jirachi-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* specialBothAsleep */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchAnyToHand:1 */ state;
    }
    return state;
  }
}
