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

export class DarkAmpharos_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dark Flaaffy";
  public hp: number = 120;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkest Impulse", powerType: PowerType.ABILITY, text: "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "30", text: "" },
      { name: "Shock Bolt", cost: [], damage: "70", text: "Discard all Lightning Energy attached to Dark Ampharos." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Ampharos";
  public fullName: string = "Dark Ampharos TRR 2";
  public text: string = "Dark Ampharos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
