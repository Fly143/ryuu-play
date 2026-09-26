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

export class Mienshao_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mienfoo";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Haul In", cost: [], damage: "", text: "Search your deck for 2 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward." },
      { name: "Meditate", cost: [], damage: "30+", text: "Does 10 more damage for each damage counter on the Defending Pokémon." }
  ];
  public set: string = "DEX";
  public name: string = "Mienshao";
  public fullName: string = "Mienshao DEX 68";
  public text: string = "Mienshao";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
