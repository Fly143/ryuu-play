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
import { commonEffects } from '../../../common';

export class Dodrio_200 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Doduo";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Zooming Draw", powerType: PowerType.ABILITY, text: "Once during your turn, you may put 1 damage counter on this Pokémon. If you do, draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ballistic Beak", cost: [], damage: "10+", text: "This attack does 30 more damage for each damage counter on this Pokémon." }
  ];
  public set: string = "PAF";
  public name: string = "Dodrio";
  public fullName: string = "Dodrio PAF 200";
  public text: string = "Dodrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, Math.floor(effect.player.active.damage / 10));
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
