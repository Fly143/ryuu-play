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

export class Zoroark_912 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 100;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stand In", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Jack", cost: [], damage: "10+", text: "This attack does 30 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "BKP";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark BKP 91";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
