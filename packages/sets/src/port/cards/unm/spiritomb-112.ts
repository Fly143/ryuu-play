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

export class Spiritomb_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Building Spite", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put 1 damage counter on this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Anguish Cry", cost: [], damage: "10+", text: "This attack does 30 more damage for each damage counter on this Pokémon." }
  ];
  public set: string = "UNM";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb UNM 112";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
