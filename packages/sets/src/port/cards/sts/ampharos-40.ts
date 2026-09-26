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

export class Ampharos_402 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flaaffy";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shocking Light", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put 3 damage counters on 1 of your opponent's Pokémon-EX.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gigavolt", cost: [], damage: "80+", text: "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "STS";
  public name: string = "Ampharos";
  public fullName: string = "Ampharos STS 40";
  public text: string = "Ampharos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 1);
    }
    return state;
  }
}
