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

export class KilowattrelEx_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wattrel";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Return Charge", cost: [], damage: "", text: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, attach up to 2 Basic Lightning Energy cards from your hand to this Pokémon." },
      { name: "Thunder Lance", cost: [], damage: "40+", text: "This attack does 40 more damage for each Lightning Energy attached to this Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Kilowattrel ex";
  public fullName: string = "Kilowattrel ex SSP 68";
  public text: string = "Kilowattrel ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
