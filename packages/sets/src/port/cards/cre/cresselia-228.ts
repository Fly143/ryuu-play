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

export class Cresselia_228 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crescent Glow", cost: [], damage: "", text: "Search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Psychic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "Photon Laser", cost: [], damage: "30+", text: "If you have at least 5 Energy in play, this attack does 90 more damage." }
  ];
  public set: string = "CRE";
  public name: string = "Cresselia";
  public fullName: string = "Cresselia CRE 228";
  public text: string = "Cresselia";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
