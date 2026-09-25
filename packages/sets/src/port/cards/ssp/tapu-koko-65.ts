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
import { commonEffects } from '../../../common';

export class TapuKoko_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Summon Lightning", cost: [], damage: "", text: "Search your deck for up to 2 Lightning Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Prize Count", cost: [], damage: "90+", text: "If you have more Prize cards remaining than your opponent, this attack does 90 more damage." }
  ];
  public set: string = "SSP";
  public name: string = "Tapu Koko";
  public fullName: string = "Tapu Koko SSP 65";
  public text: string = "Tapu Koko";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* searchPokemonToHand:1 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
