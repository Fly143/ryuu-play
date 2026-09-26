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

export class RadiantBlastoise_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Pump Shot", powerType: PowerType.ABILITY, text: "You must discard a Water Energy card from your hand in order to use this Ability. Once during your turn, you may put 2 damage counters on 1 of your opponent's Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Torrential Cannon", cost: [], damage: "170", text: "During your next turn, this Pokémon can't use Torrential Cannon." }
  ];
  public set: string = "PGO";
  public name: string = "Radiant Blastoise";
  public fullName: string = "Radiant Blastoise PGO 18";
  public text: string = "Radiant Blastoise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
