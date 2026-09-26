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

export class Toucannon_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trumbeak";
  public hp: number = 150;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aerial Draw", powerType: PowerType.ABILITY, text: "Once during your turn, you may use this Ability. Draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Feather Rondo", cost: [], damage: "60+", text: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)." }
  ];
  public set: string = "PBL";
  public name: string = "Toucannon";
  public fullName: string = "Toucannon PBL 68";
  public text: string = "Toucannon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
